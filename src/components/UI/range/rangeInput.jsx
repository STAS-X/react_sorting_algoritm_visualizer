import styles from './styles.module.css';

const RangeInput = ({
  value,
  title,
  min,
  max,
  disabled,
  wrapperClassName,
  onValueChange
}) => {
  const onInput = (value) => {
    if (disabled) {
      return
    }

    onValueChange(value);
  };

  return (
		<div className={wrapperClassName ?? styles.wrapper}>
			{title && <div className={styles.title}>{title}</div>}
			<input
				type="range"
				value={value}
				min={min}
				max={max}
				onInput={(event) => onInput(Number(event.target.value))}
				className={`${styles.range} ${disabled ? styles.disabled : ''}`}
			/>
			
		</div>
	);
};

export default RangeInput;