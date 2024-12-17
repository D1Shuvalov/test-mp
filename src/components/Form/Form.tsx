import {useForm, Controller} from "react-hook-form";
import {useContext, useEffect} from "react";
import {storeContext} from "../../app/store/store";
import {ILocation} from "../../types/types";
import data from "../../data/data.json";
import {useServerMessage} from "../../hooks/useServerMessage";
import {
  Field,
  FormInfo,
  FormWrapper,
  Icon,
  Label,
  Select,
  SelectField,
  WarningMessage,
  HintField,
  HintArea,
  IconAppearance,
} from "./Form.styled";


export const Form = ({location}: { location: ILocation }) => {
  const store = useContext(storeContext);
  const {control, watch} = useForm();

  const selectedLocation = watch("location", location.locationID?.toString() || "");
  const selectedEnv = watch("environment", location.envID?.toString() || "");
  const hintValue = watch("hint", location.hint || "");

  const updateStore = () => {
    store.updateLocationHint(location.cardID, hintValue || "");
    store.updateCardData(location.cardID, {
      locationID: selectedLocation ? parseInt(selectedLocation) : location.locationID ?? 0,
      envID: selectedEnv ? parseInt(selectedEnv) : location.envID ?? 0,
    });
  }

  const {filteredServers, serverMessage} = useServerMessage(selectedLocation, selectedEnv);

  useEffect(() => {
    updateStore();
  }, [updateStore]);


  return (
    <FormWrapper>
      <FormInfo>
        <Field>
          <Label htmlFor="location">Location</Label>
          <SelectField>
            <Icon src="/icons/location-dot-solid.svg" alt="loc"/>
            <Controller
              name="location"
              control={control}
              defaultValue={location.locationID?.toString() || ''}
              render={({field}) => (
                <Select {...field} id="location">
                  <option value="">Select location</option>
                  {data.locations.map((loc) => (
                    <option key={loc.locationID} value={loc.locationID}>
                      {loc.name}
                    </option>
                  ))}
                </Select>
              )}
            />
            <IconAppearance src="/icons/caret-down-solid.svg" alt="triangle"/>
          </SelectField>
        </Field>

        <Field>
          <Label htmlFor="environment">Environment</Label>
          <SelectField>
            <Icon src="/icons/envira-brands-solid.svg" alt="env"/>
            <Controller
              name="environment"
              control={control}
              defaultValue={location.envID?.toString() || ''}
              render={({field}) => (
                <Select {...field} id="environment">
                  <option value="">Select Environment</option>
                  {data.envs.map((env) => (
                    <option key={env.envID} value={env.envID}>
                      {env.name}
                    </option>
                  ))}
                </Select>
              )}
            />
            <IconAppearance src="/icons/caret-down-solid.svg" alt="triangle"/>
          </SelectField>
        </Field>

        <Field>
          <Label htmlFor="server">Server</Label>
          {filteredServers.length > 0 && !serverMessage.includes("Please") && (
            <Icon src="/icons/server-solid.svg" alt="server"/>
          )}
          <WarningMessage>{serverMessage}</WarningMessage>
        </Field>
      </FormInfo>

      <HintField>
        <Label htmlFor="hint">Hint</Label>
        <SelectField>
          <Icon src="/icons/question-solid.svg" alt="hint"/>
          <Controller
            name="hint"
            control={control}
            defaultValue={location.hint || ""}
            render={({field}) => (
              <HintArea
                {...field}
                id="hint"
                placeholder="Comment for location"
              />
            )}
          />
        </SelectField>
      </HintField>
    </FormWrapper>
  );
};
