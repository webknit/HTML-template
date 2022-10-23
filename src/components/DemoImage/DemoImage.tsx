import { FunctionComponent, ReactElement } from 'react';

interface IPropsContainer {
    image: IProps;
}

interface IProps {
    url: string;
    caption?: string;
    altTag?: string;
}

const DemoImage: FunctionComponent<IPropsContainer> = (props): ReactElement => {
    console.log(props);

    return (
        <section className="my-16 space-y-10 p-8">
            <h1>Demo Image</h1>
            <img src={props.image.url} alt={props.image.altTag}></img>
            <figcaption>{props.image.caption}</figcaption>
        </section>
    );
};

export default DemoImage;
