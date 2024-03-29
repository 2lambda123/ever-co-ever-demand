import { createDrawerNavigator } from '@react-navigation/drawer';

// TYPES
import type { IconNameType } from '../components/Common/Icon';

// HELPERS
import { getReactComponentProps } from '../helpers/utils';

// SCREENS
import SCREENS from '../screens';

const DrawerScreen = createDrawerNavigator().Screen;
const DrawerScreenProps = getReactComponentProps(DrawerScreen);

// LOCAL TYPES
export interface DrawerLinkItem {
	label: string;
	path: string;
	icon?: IconNameType;
	external?: boolean;
	focused?: boolean;
}
export interface DrawerRoutesGroupType {
	title: string;
	icon?: IconNameType;
	linkItems?: DrawerLinkItem[];
}
export type DrawerScreenType = typeof DrawerScreenProps;

const DRAWER_ROUTES: DrawerScreenType[] = [
	{
		name: 'DRAWER/HOME',
		component: SCREENS.APP.HOME,
	},
	{
		name: 'DRAWER/ORDER_HISTORY',
		component: SCREENS.APP.ORDER_HISTORY,
	},
	{
		name: 'DRAWER/ACCOUNT',
		component: SCREENS.APP.ACCOUNT,
	},
	{
		name: 'DRAWER/TRANSLATION',
		component: SCREENS.APP.TRANSLATION,
	},
	{
		name: 'DRAWER/SEARCH',
		component: SCREENS.APP.SEARCH,
	},
	{
		name: 'DRAWER/MERCHANTS_SEARCH',
		component: SCREENS.APP.MERCHANTS_SEARCH,
	},
	{
		name: 'DRAWER/MERCHANT_QR_SCAN',
		component: SCREENS.APP.MERCHANT_QR_SCAN,
	},
	{
		name: 'DRAWER/IN_STORE',
		component: SCREENS.APP.IN_STORE,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/PRODUCT_DETAILS',
		component: SCREENS.APP.PRODUCT_DETAILS,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/ORDER',
		component: SCREENS.APP.ORDER,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/HELP',
		component: SCREENS.INFO.HELP,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/ABOUT_US',
		component: SCREENS.INFO.ABOUT_US,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/TERMS_OF_USE',
		component: SCREENS.INFO.TERMS_OF_USE,
		options: {
			unmountOnBlur: true,
		},
	},
	{
		name: 'DRAWER/PRIVACY',
		component: SCREENS.INFO.PRIVACY,
		options: {
			unmountOnBlur: true,
		},
	},
];

export default DRAWER_ROUTES;
