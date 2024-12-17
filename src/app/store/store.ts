import {makeAutoObservable, runInAction} from "mobx";
import {createContext} from "react";
import data from "../../data/data.json";

export interface Location {
  locationID: number | null;
  hint?: string;
  server?: string;
  envID?: number | null;
}

export class Store {
  isLoaded = false;
  isLoading = false;
  locations: Location[] = [];
  locationCounter = 1;
  cardData: { cardID: number; locationID: number | null; envID: number | null; hint: string }[] = [];

  constructor() {
    makeAutoObservable(this);
    this.addLocation();
  }

  fetchData = async () => {
    if (this.isLoaded) return;
    this.isLoading = true;
    await sleep(3000);
    runInAction(() => {
      this.locations = data.locations.map((location: any) => ({
        ...location,
        envID: location.envID !== undefined ? location.envID : 1,
      }));
      this.isLoaded = true;
      this.isLoading = false;
    });
  };

  addLocation = () => {
    runInAction(() => {
      if (this.cardData.length === 0) {
        this.locationCounter = 1;
      }

      let newCardID = 1;
      while (this.cardData.some(card => card.cardID === newCardID)) {
        newCardID++;
      }

      this.cardData.push({
        cardID: newCardID,
        locationID: null,
        envID: null,
        hint: "",
      });
    });
  };
  removeLocation = (cardID: number) => {
    runInAction(() => {
      this.cardData = this.cardData.filter((card) => card.cardID !== cardID);
      if (this.cardData.length === 0) {
        this.locationCounter = 1;
      }
    });
  };

  updateLocationHint = (cardID: number, hint: string) => {
    runInAction(() => {
      const card = this.cardData.find((item) => item.cardID === cardID);
      if (card) {
        card.hint = hint;
      }
    });
  };

  updateCardData(cardID: number, updatedData: Partial<Location>) {
    runInAction(() => {
      this.cardData = this.cardData.map((card) =>
        card.cardID === cardID ? {...card, ...updatedData} : card
      );
    });
  }

  getCardData = () => {
    return this.cardData;
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const store = new Store();
export const storeContext = createContext(store);
