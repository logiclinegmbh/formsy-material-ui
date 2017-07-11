import { mount } from 'enzyme';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formsy-react';
import getMuiTheme from '@logicline/material-ui/styles/getMuiTheme';

export const mountTestForm = (childrenFn, formProps = {}) => {
  class TestForm extends Component {

    static childContextTypes = {
      muiTheme: PropTypes.object.isRequired,
    };

    getChildContext = function() {
      return { muiTheme: getMuiTheme() };
    };

    render() {
      return (
        <Form {...this.props}>
          {childrenFn()}
        </Form>
      );
    }
  }

  const formWrapper = mount(<TestForm {...formProps} />);
  return formWrapper;
};
