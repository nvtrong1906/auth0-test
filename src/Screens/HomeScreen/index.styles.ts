import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 70,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    flex: 0.2,
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",

  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
})

export default styles