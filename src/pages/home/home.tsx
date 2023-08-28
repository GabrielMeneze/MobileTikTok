import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, FlatList, Dimensions } from "react-native";
import { FeedItem } from "../../components/FeedItem/feedItem";
import { useState, useRef } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
        zIndex: 99
    },
    labelText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4
    },
    indicator: {
        backgroundColor: '#fff',
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
})

export function Home() {
    let feedItems = [
        {
            id: '1',
            video: 'https://i.imgur.com/p9hDJbs.mp4',
            name: '@spacenow',
            description: 'Little breakfast',
        },
        {
            id: '2',
            video: 'https://i.imgur.com/qfP3RmT.mp4',
            name: '@OnGoGoOn',
            description: 'Dont crabs run sideways? Even on their birthdays',
        },
        {
            id: '3',
            video: 'https://i.imgur.com/AOEb6g0.mp4',
            name: '@WeirdAlisMySpiritUserName',
            description: 'Super fresh Gorgonzola, for those who don’t want to unmute',
        }
    ]

    const [showItem, setShowItem] = useState(feedItems[0])
    const { height: heightScreen } = Dimensions.get("screen")

    const onViewRef = useRef(({ viewableItems }) => {
        try {
            if (viewableItems && viewableItems.length > 0) {
                setShowItem(feedItems[viewableItems[0].index])
            }
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: '#DDD' }]}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: '#fff' }]}>Pra você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={feedItems}
                renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
                onViewableItemsChanged={onViewRef.current}
                snapToAlignment="center"
                snapToInterval={heightScreen}
                scrollEventThrottle={150}
                decelerationRate={"fast"}
                viewabilityConfig={{
                    waitForInteraction: false,
                    // ensures that it is a screen only visible when the item occupies 100% of the screen
                    viewAreaCoveragePercentThreshold: 100
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

