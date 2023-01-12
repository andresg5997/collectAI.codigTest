import './style.css';
import { useState } from "react";

function TableContent({ lineItems, setLineItems }) {
  const [editLineItem, setEditLineItem] = useState(lineItems ? lineItems.map(() => false) : []);

  const toggleEditLineItem = (index) => {
    const newEditLineItem = [...editLineItem];
    newEditLineItem[index] = !newEditLineItem[index];
    
    setEditLineItem(newEditLineItem);
  }

  const editLineItemProperty = (key, index, newValue) => {
    const newLineItems = [...lineItems];
    newLineItems[index][key] = newValue;
    
    setLineItems(newLineItems);
  }

  return (
    lineItems ? lineItems.map((item, itemIndex) =>
      <tr className="item last" key={'item-' + itemIndex}>
        {
          !editLineItem[itemIndex] ? (
            <>
              <td>
                {item.description}
                <button onClick={() => toggleEditLineItem(itemIndex)}>✏️</button>
              </td>
              <td>{item.price} EUR</td>
            </>
          ) : (
            <>
              <td>
                <input
                  placeholder={item.description}
                  onChange={(e) => editLineItemProperty('description', itemIndex, e.target.value)} />

                <button onClick={() => toggleEditLineItem(itemIndex)}>✏️</button>
              </td>
              <td>
                <input
                  placeholder={item.price + 'EUR'}
                  onChange={(e) => editLineItemProperty('price', itemIndex, e.target.value)} />
              </td>
            </>
          )
        }
      </tr>
    ) : <></>
  )
}

export default TableContent;