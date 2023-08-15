import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Explore } from '../pages/explore/explore'
import { Home } from '../pages/home/home'
import { Inbox } from '../pages/inbox/inbox'
import { Profile } from '../pages/profile/profile'
import { Search } from '../pages/search/search'


export function Routes() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,

            tabBarStyle:{
                backgroundColor: '#000',
                borderTopWidth: 0
            }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}