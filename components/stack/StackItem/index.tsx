import React from 'react';

export type StackItemProps = {
    image: string,
    description: string
}

const StackItem = (props: StackItemProps) => {
    const {image, description} = props

    return <img src={image} alt={description}/>;
};

export default StackItem;
