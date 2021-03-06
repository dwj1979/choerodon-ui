import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../../icon';
import Input from '../../input';
import Button from '../../button';
import { saveRef } from './util';

class FilterInput extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (event,input) => {
    const { onChange } = this.props;
    onChange(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  clearInputValue = () => {
    const { onChange } = this.props;
    onChange('');
    this.setState({
      value: ''
    });
  }

  render() {
    const { prefixCls,placeholder } = this.props;
    const { value } = this.state;
    const suffix = value ? <Button size='small' onClick={this.clearInputValue} shape="circle" icon="close" /> : null;
    return (
      <div className={`${prefixCls}-filter`}>
        <span className={`${prefixCls}-filter-input`}>
          <Input
            value={value}
            placeholder={placeholder}
            prefix={<Icon type="search" />}
            suffix={suffix}
            onChange={this.handleChange}
            ref={saveRef(this, 'inputRef')}
          />
        </span>
      </div>
    );
  }
}

export default FilterInput;
