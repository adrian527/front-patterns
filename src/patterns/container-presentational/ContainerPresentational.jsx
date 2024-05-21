// With this pattern, we can separate the view from the application logic.
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

// Presentational Components: Components that care about how data is shown to the user. In this example, that’s the rendering the list of dog images.
// Container Components: Components that care about what data is shown to the user. In this example, that’s fetching.

const ContainerPresentational = () => {
    return <>
        <h2>Container / Presentational Pattern</h2>
        <ContainerComponent />
    </>
}

const ContainerComponent = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        let isFetching = false;
        if (!isFetching) {
            fetch('https://jsonplaceholder.typicode.com/photos/1').then(resp => resp.json()).then(imageObject => setImage(imageObject))
        }

        return () => {
            isFetching = true;
        }
    }, []);

    return <PresentationalComponent image={image} />
}

const PresentationalComponent = ({ image }) => {
    return image ? <img src={image.url} alt={image.title} height={600} width={600} /> : <ImagePlaceholder />
}

const ImagePlaceholder = () => {
    return <div style={{ width: '600px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray' }}>Loading...</div>
}

PresentationalComponent.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string
    }),
}


export default ContainerPresentational;