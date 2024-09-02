import { getDesignTokens } from './themePrimitives';
import { feedbackCustomizations } from './customizations/feedback';
import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surface';

export default function getSignUpTheme(mode) {
    return {
        ...getDesignTokens(mode),
        components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
        },
    };
}