import ThingyApi from "openrpcthingy";

export const thingyHTTPSapi = new ThingyApi({
  transport: {
    type: "https",
    host: "192.168.1.105",
    port: 4442,
  },
});
