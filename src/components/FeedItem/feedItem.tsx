import { View, StyleSheet, Text, Pressable, Dimensions, Touchable, TouchableOpacity, Platform } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Video } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8
    },
    description: {
        color: '#fff',
        marginRight: 24,
        textShadowColor: 'rgba(0,0,0,0.20)',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8
    },
    actions: {
        position: "absolute",
        zIndex: 99,
        right: 10,
        bottom: Platform.OS === 'android' ? 120 : 170,
        gap: 8
    },
    actionText: {
        textAlign: 'center',
        color: '#fff',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8
    }
})

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data, currentVisibleItem }) {
    const video = useRef(null)
    const [status, setStatus] = useState({})

    function handlePlayer() {
        try {
            // @ts-ignore
            status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            if (currentVisibleItem?.id === data?.id) {
                video.current?.playAsync()
            } else {
                video.current?.pauseAsync()
            }
        } catch (error) {
            console.log(error)
        }
    }, [currentVisibleItem])

    return (
        <Pressable onPress={handlePlayer}>
            <View
                style={[styles.info, { bottom: 110 }]}
            >
                <Text style={styles.name}>{data?.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="heart" size={35} color="#fff"></Ionicons>
                    <Text style={styles.actionText}>30.3k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="chatbubble-ellipses" size={35} color="#fff"></Ionicons>
                    <Text style={styles.actionText}>88</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="bookmark" size={35} color="#fff"></Ionicons>
                </TouchableOpacity>
            </View>

            <Video
                ref={video}
                style={{ width: '100%', height: heightScreen }}
                source={{ uri: data?.video }}
                // @ts-ignore
                resizeMode="cover"
                shouldPlay={false}
                isMuted={false}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </Pressable>
    )
}

