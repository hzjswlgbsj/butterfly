import { Plate, Editable, createPlateComponents, createPlateOptions } from 'plate';
import { initialValueBasicPlate } from 'plate';

const components = createPlateComponents();
const options = createPlateOptions();

const App = () => (
  <Plate components={components} options={options} initialValue={initialValueBasicPlate}>
    <Editable />
  </Plate>
);
