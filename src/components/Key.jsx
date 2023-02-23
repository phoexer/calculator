import React from 'react';
import PropTypes from 'prop-types';
import PointTarget from 'react-point'
import styles from './Key.module.scss';
import classnames from 'classnames';

const Key = ({onPoint, children, variant = "number"}) => {
    return (
        <PointTarget onPoint={onPoint}>
            <button className={classnames(styles.key, styles[variant])}>
                {children}
            </button>
        </PointTarget>
    );
}

Key.propTypes = {
    onPoint: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['number', 'operator', 'function', 'zero', 'point'])
};

export default Key;
