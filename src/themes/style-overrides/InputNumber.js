const OverrideInputNumber = () => { //{ mode }
  return {
    Input: {
      colorBgContainerDisabled: "rgba(0,0,0,0)",
      colorTextDisabled:
       "rgba(0,0,0,1)",// mode === "Dark" ? "rgba(255,255,255,0.8)" : 
      fontSize: 12,
    },
  };
};

export default OverrideInputNumber;
