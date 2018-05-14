import * as React from 'react';
import { FormElement, FormElementProps, Select } from 'ghoti';

class RaceChooser extends React.Component<FormElementProps, {}> {
    static defaultProps = {
        value: {
            raceName: 'lashunta'
        },
        onChange: () => { }
    };

    onFieldChange = (fieldName: string, newValue: any) => {
        const fullNewValue = {
            ...this.props.value,
            [fieldName]: newValue
        };

        this.props.onChange && this.props.onChange(fullNewValue);
    }

    render() {
        return (
            <div>
                Subspecies
                <div>
                    <Select
                        name="subspecies"
                        onChange={(newValue: any) => this.onFieldChange('subspecies', newValue)}
                        value={this.props.value.subspecies}
                        options={[
                            { key: 'damaya', displayValue: 'Damaya' },
                            { key: 'korasha', displayValue: 'Korasha' }
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default FormElement()(RaceChooser);