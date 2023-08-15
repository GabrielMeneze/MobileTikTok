import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { Explore } from '../pages/explore/explore'
import { Home } from '../pages/home/home'
import { Inbox } from '../pages/inbox/inbox'
import { Profile } from '../pages/profile/profile'
import { Search } from '../pages/search/search'
import { ButtonExplore } from '../components/buttonExplore/buttonExplore'


export function Routes() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0
                },
                tabBarActiveTintColor: "#fff"
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons name="home" size={size} color={color} />
                            );
                        }
                        return (<Ionicons name="home-outline" size={size} color={color} />);
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons name="search" size={size} color={color} />
                            );
                        }
                        return (<Ionicons name="search-outline" size={size} color={color} />);
                    }
                }}
            />

            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ size }) => {
                        return <ButtonExplore size={size}/>
                    }
                }}
            />

            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />
                            );
                        }
                        return (<Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color} />);
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons name="person" size={size} color={color} />
                            );
                        }
                        return (<Ionicons name="person-outline" size={size} color={color} />);
                    }
                }}
            />
        </Tab.Navigator>
    )
}