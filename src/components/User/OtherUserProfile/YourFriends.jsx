import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Text
} from "react-native";
import AppHeader from "../AppHeader";
import { FontAwesome } from "@expo/vector-icons";
import { seguidoresQueMeSiguen } from "../../../api/User.controller"
import ItemsFriendsList from "../MyFriendsList/ItemsFriendsList";
// import { Ionicons } from '@expo/vector-icons'; // Descomentar si decides usar Ionicons

function YourFriends({ route }) {
    const { user } = route.params;
    const [allList, setAllList] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        const fetchFriends = async () => {
            try {
                console.log('user id para obtener los usuarios ' + user._id);
                const response = await seguidoresQueMeSiguen(user._id);
                setAllList(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchFriends();
    }, []);

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const paddingToBottom = 20;
        if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
            setItemsToShow(itemsToShow + 10); // Cargar 10 elementos más
        }
    };

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    const filteredList = allList.filter((user) => {
        const fullName = `${user.name} ${user.last_name}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <View style={styles.container}>
            <AppHeader title="YourFriends" />
            <View style={styles.searchContainer}>
                <FontAwesome
                    name="search"
                    size={24}
                    color="#CCCCCC"
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Buscar en sus amigos..."
                    placeholderTextColor="#CCCCCC"
                    onChangeText={handleSearch}
                />
                {/*
                <TouchableOpacity onPress={handleFilterPress}>
                    <Ionicons
                        name="filter-outline"
                        size={24}
                        color="gray"
                        style={styles.iconFilter}
                    />
                </TouchableOpacity>
                */}
            </View>
            <Text style={{ paddingHorizontal: 10, color: 'gray' }}>Seguidores que lo siguen</Text>
            <ScrollView
                style={styles.scrollContainer}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {allList.map((user) => (
                    <ItemsFriendsList
                        key={user.seguidor_id}
                        name="Juan" 
                        lastName="Pérez"
                        age={25}
                        avatarUrl={user.avatarUrl}
                        userID={user.seguidor_id}
                        authUser={user} // Asegúrate de que authUser esté disponible si lo necesitas
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        backgroundColor: "#FFFFFF",
    },
    icon: {
        marginRight: 10,
    },
    iconFilter: {
        marginLeft: 10,
        marginRight: 2,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        fontSize: 16,
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
});

export default YourFriends;
