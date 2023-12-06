import { useState } from 'react';
import cn from 'classnames';

const FilterBtn = ({name, className}) => {
    const [isActive, setIsActive] = useState(false);
	
	return (
		<button 
			className={cn(className, {
				['active']: isActive
			})}
			onClick={() => setIsActive(true)}
		>
			{name}
		</button>
	)
};

export default FilterBtn;