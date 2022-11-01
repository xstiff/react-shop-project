const CheckoutItem = (x) => {
    const { item } = x;
    const { name, quantity, price, imageUrl } = item;
    // console.log(item);
    return (
        <>
            <tr>
                <td>
                    <img src={imageUrl} alt={name} />
                </td>
                <td>{name}</td>
                <td> &lArr; {quantity} &rArr; </td>
                <td>{price * quantity}$</td>
                <td>X</td>
            </tr>
        </>
    );
};

export default CheckoutItem;
