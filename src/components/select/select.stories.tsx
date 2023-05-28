import type { Meta, StoryObj } from '@storybook/react';

import { Select, SelectOption } from './select';
import { ChangeEvent, useState } from 'react';

const meta = {
  title: 'UI Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const selectOptions: SelectOption[] =  [{
        label: "Option 1",
        value: "Option 1"
    },{
        label: "Option 2",
        value: "Option 2"
    },{
        label: "Option 3",
        value: "Option 3"
    }]

export const Default: Story = {
  args: {
    label: 'Select',
    size: "base",
    rounded: "base",
    options: selectOptions
  },
};

const WithSelectedValue = () => {
    const [value, setValue] = useState<string>();

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        setValue(e.target.value);
    };

    return (
        <>
            <Select onChange={handleOnChange} label={"Select"} options={selectOptions} />
            <br/>
            <p>Selected value: {value}</p>
        </>
    );
}

export const SelectValue: Story = {
    args: {...Default.args},
    render: ()=><WithSelectedValue/>
};
