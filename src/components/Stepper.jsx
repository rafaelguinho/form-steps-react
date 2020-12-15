import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Stepper({activeStep, minStep, maxStep, changeStepAction, children}){
    return(<Fragment>
        {children[activeStep]}

      <div>
        
      <button onClick={() => {
        if(activeStep > minStep){
          activeStep-=1;
          changeStepAction(activeStep)
        }
      }}>Last</button>

        <button onClick={() => {
        if(activeStep < maxStep){
          activeStep+=1;
          changeStepAction(activeStep)
        }

        }}>Next</button>
      </div>

    </Fragment>)
}

Stepper.defaultProps = {
    activeStep: 0,
    minStep: 0
  }

  Stepper.propTypes = {
    activeStep: PropTypes.number,
    minStep: PropTypes.number,
    maxStep: PropTypes.number.isRequired,
    changeStepAction: PropTypes.func.isRequired,
  }

  export default Stepper;