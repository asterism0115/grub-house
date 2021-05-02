import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Switch,
  FlatList,
  Image,
} from "react-native";
import { Avatar, Icon, Divider } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import global from "../../global";
import ImageOverlay from "react-native-image-overlay";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { ScrollView } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
import { LinearGradient } from "expo-linear-gradient";

const DATA = {
  list: [
    {
      id: "1",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa8oUGpmKYHMUBvQDbTioSfqtWuY3DyY3QGVtZJK7W_udL7u_P",
    },
    {
      id: "2",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_rXxH1aF4mU17y9r6pqERdy-ICfZfey9WF4HL6Q8WaePm3GtM",
    },
    {
      id: "3",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxRlBLxnUINlr_VSC4JxObMiJPElAVbJ65ZAe9N_-WJNv_siLZ",
    },
    {
      id: "4",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKz18E8uKCLVA_FJRD1QCtbpQ188yVc9D_WjgaexTqDo7UFa-B",
    },
    {
      id: "5",

      image:
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
    },
    {
      id: "5",

      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/4/26/0/HE_kwon-Ground-Turkey-Enchilada-Stir-Fry-with-Couscous_s4x3.jpg.rend.hgtvcom.441.331.suffix/1461695054811.jpeg",
    },
  ],
  family: [
    {
      id: "hudaygf",
      name: "John",
      img: "https://i.pravatar.cc/300",
      user_type: "admin",
      limit: "2000",
      limit_remaining: "1000",
    },
    {
      id: "hefudaygf",
      name: "Harry",
      img: "https://i.pravatar.cc/300",
      user_type: "member",
      limit: "2000",
      limit_remaining: "1000",
    },
    {
      id: "hufedaygf",
      name: "Milton",
      img: "https://i.pravatar.cc/300",
      user_type: "member",
      limit: "2000",
      limit_remaining: "300",
    },
    {
      id: "hudawfygf",
      name: "Wisley",
      img: "https://i.pravatar.cc/300",
      user_type: "member",
      limit: "2000",
      limit_remaining: "0",
    },
    {
      id: "hudaewfygf",
      name: "Derek",
      img: "https://i.pravatar.cc/300",
      user_type: "member",
      limit: "2000",
      limit_remaining: "1000",
    },
  ],
};
export default class familyProfile extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.getPermissionAsync();
    this.state = {
      data: DATA,
      name: "lynda_xo",
      location: "London",
      Favourite: "0",
      Followers: "10",
      Following: "0",
      student_hide: true,
      switchValue: true,
      profile_image: "",
    };
  }
  // Get camera and files permissions
  getPermissionAsync = async () => {
    if (global.CONSTANT.DEVICETYPE == "ios") {
      // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status, permissions } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  // Image Picker function
  _pickImage = async (v) => {
    console.log(v);
    let option =
      v == "camera"
        ? ImagePicker.launchCameraAsync
        : ImagePicker.launchImageLibraryAsync;
    let field = this.state.field;
    let result = await option({
      quality: 0.2,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ profile_image: result.uri });
    }
  };
  toggleSwitch = (val) => {
    console.log("val: ", val);
    this.setState({
      switchValue: val,
    });
    // global.IS_ONLINE[0] = val ? "true" : "false";

    // this.changeStatus(val);
  };
  render() {
    return (
      // back ground container
      <View style={styles.bgContainer}>
        <ScrollView>
          {/* image backgroun container */}
          <ImageBackground
            source={global.ASSETS.PROFILE}
            style={styles.imageContainer}
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0,0.1)",
              }}
            >
              <View style={styles.iconContainer}>
                <View>
                  <Icon
                    name="chevron-left"
                    // reverse
                    color="#fff"
                    type="material-community"
                    size={40}
                    // iconStyle={styles.icon}
                    Component={TouchableOpacity}
                    onPress={() => this.props.navigation.navigate("Profile")}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Icon
                    name="clock-outline"
                    // reverse
                    color="#fff"
                    type="material-community"
                    size={28}
                    //   iconStyle={styles.icon}
                    Component={TouchableOpacity}
                    onPress={() =>
                      this.props.navigation.navigate("FamilyProfile")
                    }
                  />
                  <Icon
                    name="share-variant"
                    // reverse
                    color="#fff"
                    type="material-community"
                    size={28}
                    iconStyle={{ marginHorizontal: 6 }}
                    //   iconStyle={styles.icon}
                    Component={TouchableOpacity}
                    //   onPress={() => this.props.navigation.navigate("Profile")}
                  />
                </View>
              </View>

              {/* <View style={styles.avatarContainer}> */}
              <View style={styles.avatarContainer}>
                <View>
                  <Icon
                    name="calendar-text-outline"
                    reverse
                    reverseColor="#000"
                    color="#fff"
                    type="material-community"
                    size={25}
                    // iconStyle={styles.icon}
                    Component={TouchableOpacity}
                    onPress={() => this.props.navigation.navigate("Piggy")}
                  />
                </View>
                <View>
                  <Avatar
                    rounded
                    showEditButton
                    size={100}
                    source={{ uri: this.state.profile_image }}
                    onPress={() => {
                      this._pickImage("camera");
                    }}
                  />
                </View>
                <View>
                  <Icon
                    name="account"
                    reverse
                    reverseColor="#fff"
                    color={global.COLOR.PRIMARY}
                    type="material-community"
                    size={25}
                    // iconStyle={styles.icon}
                    Component={TouchableOpacity}
                    onPress={() =>
                      this.props.navigation.navigate("StudentProfile")
                    }
                  />
                </View>
              </View>

              <Text style={styles.naameText}>{this.state.name}</Text>

              <Text style={styles.locationText}>{this.state.location}</Text>

              {/* </View> */}

              {/* favourite back container */}
              <View style={styles.backContainer}>
                <TouchableOpacity
                  style={styles.favourateContainer}
                  onPress={() => this.props.navigation.navigate("Favourites")}
                >
                  <Text style={styles.numberText}>{this.state.Favourite}</Text>
                  <Text style={styles.favourateText}>Favourite</Text>
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity
                  style={styles.favourateContainer}
                  onPress={() => this.props.navigation.navigate("Followers")}
                >
                  <Text style={styles.numberText}>{this.state.Followers}</Text>
                  <Text style={styles.favourateText}>Followers</Text>
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity
                  style={styles.favourateContainer}
                  onPress={() => this.props.navigation.navigate("Following")}
                >
                  <Text style={styles.numberText}>{this.state.Following}</Text>
                  <Text style={styles.favourateText}>Following</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.toggleContainer}>
            <View style={styles.notificationContainer}>
              <Icon
                name="bell-ring"
                //   reverse
                //   reverseColor="#000"
                color="#000"
                type="material-community"
                size={25}
                iconStyle={{ marginHorizontal: 6 }}
                // iconStyle={styles.icon}
                Component={TouchableOpacity}
              />
              <Text style={styles.notificationText}>
                Receive new post notifications
              </Text>
            </View>
            <View style={styles.switch}>
              <Switch
                thumbColor={this.state.switchValue ? "#009FFF" : "red"}
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </View>
          </View>
          {/* <View style={styles.toggleContainer}>
            <Text style={styles.reviewText}>REVIEWS</Text>
            <Icon
              name="google-maps"
              //   reverse
              //   reverseColor="#000"
              color="#000"
              type="material-community"
              size={25}
              iconStyle={{ marginHorizontal: 6 }}
              // iconStyle={styles.icon}
              Component={TouchableOpacity}
            />
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item: d }) => (
              <View>
                <Image source={{ uri: d.image }} style={styles.image} />
              </View>
            )}
          />

          <View style={styles.toggleContainer}>
            <Text style={styles.reviewText}>Foodie Family</Text>
            <Icon
              name="chevron-right"
              //   reverse
              //   reverseColor="#000"
              color="gray"
              type="material-community"
              size={28}
              // iconStyle={{ marginHorizontal: 6 }}
              // iconStyle={styles.icon}
              //   Component={TouchableOpacity}
            />
          </View>
          <View>
            <FlatGrid
              itemDimension={global.CONSTANT.WIDTH / 3 - 20}
              items={DATA}
              renderItem={({ item }) => (
                <View>
                  <Image source={{ uri: item.image }} style={styles.image1} />
                </View>
              )}
            />
          </View>
          */}
          <View style={styles.toggleContainer}>
            <Text style={styles.reviewText}>Family Members</Text>
            <Icon
              name="plus"
              //   reverse
              //   reverseColor="#000"
              // color="red"
              type="material-community"
              size={28}
              // iconStyle={{ marginHorizontal: 6 }}
              // iconStyle={styles.icon}
              //   Component={TouchableOpacity}
            />
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.data.family}
              renderItem={({ item: d }) => (
                <View style={{ marginHorizontal: 5 }}>
                  <Avatar rounded size="large" source={{ uri: d.img }} />
                  <Text style={{ alignSelf: "center", fontSize: 18 }}>
                    {d.name}
                  </Text>
                  {d.user_type == "admin" && (
                    <Text style={{ alignSelf: "center" }}>{d.user_type}</Text>
                  )}
                </View>
              )}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.reviewText}>Family Plan</Text>
            <Icon name="plus" type="material-community" size={28} />
          </View>
          <View>
            {/* <View
              style={{
                marginHorizontal: 20,
                height: 190,
                borderRadius: 20,
                marginBottom: 15,
                backgroundColor: "#000",
              }}
            >
              <Text style={{ color: "#fff" }}>grubHouse</Text>
            </View> */}
            <LinearGradient
              colors={["#360033", "#0b8793"]}
              style={{
                // position: "absolute",
                // left: 0,
                // right: 0,
                // top: 0,
                // height: 300,
                marginHorizontal: 20,
                height: 190,
                borderRadius: 20,
                marginBottom: 15,
              }}
            >
              <Image
                source={global.ASSETS.LOGO}
                style={{ width: 100, height: 80, alignSelf: "center" }}
                resizeMode="contain"
              />
              <Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>
                Linda's Card
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 25,
                  alignSelf: "center",
                  marginVertical: 10,
                }}
              >
                XXXX-XXXX-XXXX-XXXX
              </Text>
              <Text
                style={{
                  color: "#fff",
                  alignSelf: "flex-end",
                  fontSize: 20,
                  marginHorizontal: 10,
                }}
              >
                Card Limit: 1000
              </Text>
            </LinearGradient>
          </View>
          <View>
            <FlatList
              // horizontal
              showsVerticalScrollIndicator={false}
              data={this.state.data.family}
              renderItem={({ item: d }) => (
                <View
                  style={{
                    borderColor: "#009FFF",
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    marginBottom: 5,
                  }}
                >
                  <Text style={{ alignSelf: "center", fontSize: 20 }}>
                    {d.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 20,
                      marginBottom: 5,
                      // backgroundColor
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 18 }}>Spend limit:</Text>
                      <Text style={{}}>Remaining:</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 18 }}>{d.limit}</Text>
                      <Text style={{}}>{d.limit_remaining}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
  },
  imageContainer: {
    // height: 320
    flex: 0.4,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 30
    // marginTop: "-13%"
  },
  iconContainer: {
    marginTop: global.CONSTANT.STATUSBAR + 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    // backgroundColor: "rgba(0, 0, 0,0.1)"
  },
  icon: {
    marginTop: 30,
  },
  naameText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  locationText: {
    color: "#fff",
    textAlign: "center",
  },
  backContainer: {
    borderColor: "#fff",
    borderWidth: 1.5,
    margin: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  favourateContainer: {
    alignSelf: "center",
    marginHorizontal: 14,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  favourateText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    resizeMode: "contain",
  },
  divider: {
    height: 62,
    width: 1.5,
    backgroundColor: "#fff",
  },
  orderContainer: {
    backgroundColor: global.COLOR.PRIMARY,
    height: 40,
    width: 156,
    borderRadius: 10,
    // marginBottom: 6,
    marginTop: 10,
  },
  borderBackContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  notificationText: {
    fontSize: 16,
    alignSelf: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 130,
    width: 150,
    resizeMode: "cover",
    marginHorizontal: 4,
    // borderRadius: 10

    // marginHorizontal: 5
  },
  image1: {
    height: 140,
    margin: -4,
  },
});
