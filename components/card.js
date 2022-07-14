import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const imagenes = [
    "https://images6.alphacoders.com/911/thumb-1920-911616.jpg",
    "https://images.alphacoders.com/542/thumb-1920-542032.jpg",
    "https://pymstatic.com/74245/conversions/psicologos-cordoba-argentina-default.jpg",
    "https://www.nomadsmaldives.com/HTML/img/trips/honeymoon/luna-de-miel-ideal-maldivas_FB.jpg",
    "https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/77772_largeImage.jpg?itok=JLGPRFxI",
    "https://cdni.russiatoday.com/rbthmedia/images/web/es-rbth/images/2016-07/top/plaza_roja_g1exdk_1300.jpg",
    "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?cs=srgb&dl=pexels-vlad-alexandru-popa-1486222.jpg&fm=jpg",
    "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    "https://www.miviaje.info/wp-content/uploads/2019/03/rio-amazonas-cruceros.jpg",
    "https://www.viajaraitalia.com/wp-content/uploads/2011/05/Colosseum_in_Rome_Italy.jpg",
    "https://static.onecms.io/wp-content/uploads/sites/28/2021/07/27/lima-peru-LIMATG0721.jpg",
    "https://fondosmil.com/fondo/12425.jpg"
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
    return (

        <View
            style={[
                {
                    position: "absolute",
                    height: ALTURA_BACKDROP,
                    top: 0,
                    width: width,
                },
                StyleSheet.absoluteFillObject,
            ]}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 50,
                textAlign: 'center',
                marginTop: '5%',
                color: 'white',
            }}>Popular MyTineraries</Text>
            {imagenes.map((imagen, index) => {
                const inputRange = [
                    (index - 1) * ANCHO_CONTENEDOR,
                    index * ANCHO_CONTENEDOR,
                    (index + 1) * ANCHO_CONTENEDOR,
                ];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                });
                return (

                    <Animated.Image
                        key={index}
                        source={{ uri: imagen }}
                        style={[
                            { width: width, height: ALTURA_BACKDROP, opacity },
                            StyleSheet.absoluteFillObject,
                        ]}
                    />
                );
            })}
            <LinearGradient
                colors={["transparent", "black"]}
                style={{
                    width,
                    height: ALTURA_BACKDROP,
                    position: "absolute",
                    bottom: 0,
                }}
            />
        </View>
    );
}

export default function App() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                snapToAlignment="start"
                contentContainerStyle={{
                    paddingTop: 200,
                    paddingHorizontal: ESPACIO_CONTENEDOR,
                }}
                snapToInterval={ANCHO_CONTENEDOR}
                decelerationRate={0}
                scrollEventThrottle={16}
                data={imagenes}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    });
                    return (
                        <View style={{ width: ANCHO_CONTENEDOR }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: ESPACIO,
                                    padding: ESPACIO,
                                    borderRadius: 34,
                                    backgroundColor: "black",
                                    
                                    alignItems: "center",
                                    transform: [{ translateY: scrollY }],
                                }}
                            >
                                <Image source={{ uri: item }} style={styles.posterImage} />
                                <Text style={{color: 'white', fontWeight: "bold", fontSize: 26 }}>
                                    {" "}
                                    Título
                                </Text>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});