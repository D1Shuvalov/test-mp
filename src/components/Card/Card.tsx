import {observer} from "mobx-react-lite";
import {Form} from "../Form/Form";
import {useContext} from "react";
import {storeContext} from "../../app/store/store";
import {ILocation} from "../../types/types";
import {CardInfo, Image, CardTitle, CardWrapper, CardImage, CardName, RemoveButton} from "./Card.styled";

export const Card = observer(({location}: { location: ILocation }) => {
  const store = useContext(storeContext);
  const handleRemove = () => {
    store.removeLocation(location.cardID);
  };

  return (
    <CardWrapper>
      <CardInfo>
        <CardName>
          <CardImage src="/icons/vial-solid.svg" alt="vial"/>
          <CardTitle>
            TESTING LOCATION {location.cardID}
          </CardTitle>
        </CardName>
        <RemoveButton>
          <Image src="/icons/trash-solid.svg" alt="trash" onClick={handleRemove}/>
        </RemoveButton>
      </CardInfo>
      <Form location={location}/>
    </CardWrapper>
  );
});
