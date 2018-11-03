export default {
  rosBridge: {
    url: "ws://daarm.ngrok.io",
    status: "disconnected"
  },
  robot: {
    status: "disconnected",
    pose: {
      position: { x: 0.0, y: 0.0, z: 0.0 },
      orientation: { x: 0.0, y: 0.0, z: 0.0, w: 0.0 }
    },
    goal: {
      position: { x: 0.0, y: 0.0, z: 0.0 },
      orientation: { x: 1.0, y: 0.0, z: 0.0, w: 0.0 }
    }
  },
  tui: {
    currentConfig: "0000000000000000000000000000000000000000000000000000000000",
    blocks: []
  },
  rosParams: {
    params: [],
    accessors: []
  }
};
