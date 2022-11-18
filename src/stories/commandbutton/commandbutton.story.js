import { action } from '@storybook/addon-actions'
import CommandButton from '../../components/commandbutton.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'CommandButton',
  component: CommandButton,
  argTypes: {
    name: { control: 'text' },
    className: {
      control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}
    },
    isLoading: { control: 'boolean' },
    useDiv: { control: 'boolean'}
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CommandButton },
  template: `<CommandButton :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UThvnUIPTAFJPPbc1h6OI5/Storybook-Connect-(Community)?node-id=0%3A1&t=PzfkCWi47Qd4TkJn-1'
  }
});

export const Normal = Template.bind({});
Normal.args = {
  name: 'Prova',
  className: 'primary',
  useDiv: false,
  isLoading: false,
};
