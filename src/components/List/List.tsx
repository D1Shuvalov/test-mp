import {observer} from "mobx-react-lite";
import {Card} from "../Card/Card";
import {useCallback, useContext, useEffect} from "react";
import {storeContext} from "../../app/store/store";
import {toJS} from "mobx";
import {ILocation} from "../../types/types";
import {Button, ButtonWrapper, Wrapper} from "./List.styled";
import {Spin} from "antd";

export const List = observer(() => {
  const store = useContext(storeContext);
  const loading = store.isLoading;

  useEffect(() => {
    if (!store.isLoaded && !store.isLoading) {
      store.fetchData().catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
  }, [store]);

  const locations = store.getCardData().map((location) => ({
    ...location,
  }));
  const handleSubmit = () => {
    store.addLocation();
  };

  const handleClick = useCallback(() => {
    const result = toJS(store.getCardData()).map(locations => ({
      locationID: locations.locationID || null,
      envID: locations.envID || null,
      hint: locations.hint || 'empty'
    }));
    console.log(result);
  }, [store]);

  return (
    <Wrapper>
      {loading ? (
        <Spin size="large" spinning={loading}/>
      ) : (
        <>
          {locations.map((location: ILocation) => (
            <Card key={`${location.cardID}-${location.locationID}`} location={location}/>
          ))}
          <ButtonWrapper>
            <Button onClick={handleClick}>SHOW RESULT</Button>
            <Button onClick={handleSubmit}>ADD TEST LOCATION</Button>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
});
