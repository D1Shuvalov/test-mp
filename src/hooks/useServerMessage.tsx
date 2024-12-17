import {useMemo} from "react";
import data from "../data/data.json";

export const useServerMessage = (selectedLocation: string, selectedEnv: string) => {
  return useMemo(() => {
    const filteredServers = data.servers.filter(
      (server) =>
        (!selectedLocation || server.locationID === parseInt(selectedLocation)) &&
        (!selectedEnv || server.envID === parseInt(selectedEnv))
    );

    let serverMessage = "Please select a location and environment";
    if (selectedLocation && !selectedEnv) {
      serverMessage = "Please select an environment";
    } else if (!selectedLocation && selectedEnv) {
      serverMessage = "Please select a location";
    } else if (selectedLocation && selectedEnv) {
      serverMessage =
        filteredServers.length > 0
          ? filteredServers.map((server) => server.name).join(", ")
          : "No servers available";
    }


    return {filteredServers, serverMessage};
  }, [selectedLocation, selectedEnv]);
};
