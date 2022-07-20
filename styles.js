import { StyleSheet } from "react-native";

export const appStyles=StyleSheet.create({
container:{
    flex:1,
    margin:16,
},
title:{
fontsize:30,

},
subtitle:{
    margintop:4,
    fontsize:20,
    color:"#666",
},
input:{
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:6,
    borderWidth:1,
    borderColor:"#ddd",
    fontsize:18,
    marginTop:8,
    //Padding, içeriden boşluk bırakır , margin dışarıdan
},
buttoncontainer:{
    backgroundColor:"lightgreen",
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:6,
    alignSelf:"flex-end",
    alignItems:"center",
    margintop:8,
},
buttontext:{
    fontsize:18,
}

});
