import React, { useState, useEffect } from 'react';
import '../css/CheckboxGroup.css';

const CheckboxGroup = ({ onChange }) => {
  const checkTypes = [
    { name: '시험년도', count: 16, startIndex: 2022, increment: false, isString: true },
    { name: '시험회차', count: 3, startIndex: 0, increment: true, isString: false },
    { name: '답안지종류', count: 3, options: ['교사용', '학생용', '해설집'], increment: false, isString: false },
  ];

  const [checkedItems, setCheckedItems] = useState(() => {
    const initialCheckedItems = {};

    checkTypes.forEach((checkboxType) => {
      for (let i = 0; i < checkboxType.count; i++) {
        const index = checkboxType.increment ? `${checkboxType.startIndex + i}` :
            (checkboxType.isString ? `${checkboxType.startIndex - i}` : `${checkboxType.options[i]}`);
        initialCheckedItems[`${checkboxType.name}-${index}`] = false;
      }
    });

    return initialCheckedItems;
  });

  const handleCheckboxChange = (checkboxType, index) => {
    const checkboxId = `${checkboxType.name}-${index}`;

    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = { ...prevCheckedItems, [checkboxId]: !prevCheckedItems[checkboxId] };
      return newCheckedItems;
    });

    // 체크되지 않은 아이템을 걸러내어 부모 컴포넌트에 전달합니다
    const selectedItems = Object.keys(checkedItems)
        .filter((key) => checkedItems[key])
        .map((key) => {
          const [name, value] = key.split('-');
          switch (checkboxType.name) {
            case '시험년도':
              return name === checkboxType.name ? `${checkboxType.startIndex - value}` : null;
            case '시험회차':
              return name === checkboxType.name ? `${checkboxType.startIndex + (+value) + 1}` : null;
            case '답안지종류':
              return name === checkboxType.name ? checkboxType.options[value] : null;
            default:
              return null;
          }
        })
        .filter((value) => value !== null);

    // 부모 컴포넌트에게 변경된 값을 전달합니다
    onChange({
      checkedItems: {
        ...checkedItems,
        [checkboxId]: !checkedItems[checkboxId],
      },
      selectedItems,
    });
  };


  useEffect(() => {
    // 값이 변경될 때마다 자동으로 onChange를 호출합니다
    onChange({
      checkedItems,
      selectedItems: Object.keys(checkedItems)
          .filter((key) => checkedItems[key])
          .map((key) => {
            const [name, value] = key.split('-');
            switch (checkTypes.find((type) => type.name === name).name) {
              case '시험년도':
                return `${checkTypes.find((type) => type.name === name).startIndex - value}`;
              case '시험회차':
                return `${(+value)+1}`;
              case '답안지종류':
                return checkTypes.find((type) => type.name === name).options[value];
              default:
                return null;
            }
          }),
    });
  }, [checkedItems, onChange, checkTypes]);

  return (
      <div className="CheckboxGroupContainer">
        {checkTypes.map((checkboxType) => (
            <div key={checkboxType.name}>
              <h2>{checkboxType.name}</h2>
              {Array.from({ length: checkboxType.count }, (_, index) => (
                  <div key={`${checkboxType.name}-${index}`} style={{ display: 'inline-block', margin: '10px' }}>
                    <input
                        type="checkbox"
                        id={`${checkboxType.name}-${index}`}
                        checked={checkedItems[`${checkboxType.name}-${index}`] || false}
                        onChange={() => handleCheckboxChange(checkboxType, index)}
                    />
                    <label htmlFor={`${checkboxType.name}-${index}`}>
                      {`${checkboxType.increment ? index + 1 + '회차' : (checkboxType.isString ? -1 * index + 2022 : checkboxType.options[index])}`}
                    </label>
                  </div>
              ))}
            </div>
        ))}
      </div>
  );
};

export default CheckboxGroup;

/*
<div>
        <strong>Selected Options:</strong>
        {Object.keys(checkedItems).map((key) => (
          checkedItems[key] && <span key={key}> {key} </span>
        ))}
      </div>
*/