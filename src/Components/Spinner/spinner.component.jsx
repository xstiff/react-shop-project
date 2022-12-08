import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => (
    <SpinnerOverlay>
        <span>Fetching data from Firebase...</span>

        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;
