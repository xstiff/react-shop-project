import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => (
    <SpinnerOverlay>
        <span>Loading</span>

        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;
