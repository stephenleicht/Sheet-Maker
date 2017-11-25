import * as React from 'react';
import { FormElementProps, FormElement } from 'ghoti';

class RaceChooser extends React.Component<FormElementProps, {}> {
    render() {
        return (
            <div>
                Custom Race chooser element
            </div>
        )
    }
}

export default FormElement()(RaceChooser);