import * as React from 'react';
import { FormElement, FormElementProps, Select } from 'ghoti/forms';

class RaceChooser extends React.Component<FormElementProps, {}> {
    static defaultProps = {
        value: {
            raceName: 'lashunta'
        }
    };

    onFieldChange = (fieldName: string, newValue: any) => {
        const fullNewValue = {
            ...this.props.value,
            [fieldName]: newValue
        };

        this.props.onChange(fullNewValue);
    }

    render() {
        return (
            <div>
                Subspecies
                <Select
                    onChange={(newValue: any) => this.onFieldChange('subspecies', newValue)}
                    value={this.props.value.subspecies}
                    options={[
                        { key: undefined, displayValue: '' },
                        { key: 'damaya', displayValue: 'Damaya' },
                        { key: 'korasha', displayValue: 'Korasha' }
                    ]}
                />
            </div>
        )
    }
}

export default FormElement()(RaceChooser);