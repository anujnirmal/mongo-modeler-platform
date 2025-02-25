import { useThemeContext } from '@/core/providers';
import classes from '@/pods/toolbar/toolbar.pod.module.css';
import { DarkIcon, LightIcon } from '@/common/components/icons';
import { ToolbarButton } from '../toolbar-button';

interface Props {
  darkLabel: string;
  lightLabel: string;
}
export const ThemeToggleButton: React.FC<Props> = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <ToolbarButton
      className={`${classes.button} hide-mobile`}
      icon={theme.themeMode === 'dark' ? <LightIcon /> : <DarkIcon />}
      label={''}
      onClick={toggleTheme}
    />
  );
};
