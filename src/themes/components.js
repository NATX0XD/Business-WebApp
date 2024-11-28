import OverrideButton from "./style-overrides/Button";
import OverrideCard from "./style-overrides/Card";
import OverrideDatePicker from "./style-overrides/DatePicker";
import OverrideDrawer from "./style-overrides/Drawer";
import OverrideForm from "./style-overrides/Form";
import OverrideInput from "./style-overrides/Input";
import OverrideInputNumber from "./style-overrides/InputNumber";
import OverrideLayout from "./style-overrides/Layout";
import OverrideSelect from "./style-overrides/Select";
import OverrideTable from "./style-overrides/Table";
import OverrideTabs from "./style-overrides/Tabs";


const Components = (props) => {
  return {
    ...OverrideButton(props),
    ...OverrideCard(props),
    ...OverrideDatePicker(props),
    ...OverrideDrawer(props),
    ...OverrideForm(props),
    ...OverrideInput(props),
    ...OverrideInputNumber(props),
    ...OverrideLayout(props),
    ...OverrideSelect(props),
    ...OverrideTable(props),
    ...OverrideTabs(props)
  };
};

export default Components;
