import { Platform, StyleSheet } from "react-native";
import { colors } from "./assets/styles/components/colors";

export const stylesAll = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  m_bottom:{
    paddingBottom:150
  },
  empty_block: {
    flexDirection: "column",
    paddingHorizontal: 16,
    marginTop:140,
  },
  basket_line :{
  borderTopWidth:1,
  borderTopColor:colors.phon,
  paddingHorizontal:16
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#191919",
  },
  itemSum: {
    fontSize:20,
    fontWeight: "bold",
    color: "#191919",
  },
  itemAddress: {
    fontSize: 14,
    fontWeight: "400",
    color: "#191919",
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
     alignItems:'center'
  },
  bonus: {
    color: "#68B936",
    fontSize: 14,
    fontWeight: "700",
  },
  date_text: {
    fontSize: 12,
    fontWeight: "500",
    color:colors.gray,
  },
  cell_box: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.feuillet,
    justifyContent: "center",
    alignItems: "center",
  },
  logotip: {
    width: 80,
    height: 30,
  },
  icons: {
    width: 24,
    height: 24,
  },
  cell_text: {
    fontSize: 18,
    fontWeight: "400",
    color: "#191919",
  },
  auth_text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B6B6B",
    textAlign: "center",
  },
  loading: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loading_catalog: {
    width: "100%",
    height: 400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loading_catalog_page: {
    width: "100%",
    height: 600,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  barrcode_page_text: {
    color: "#9519AD",
    fontSize: 24,
    fontWeight: "600",
  },
  header_nav: {
    backgroundColor: "white",
    paddingBottom: 12,
  },
  header_nav_gray: {
    backgroundColor: "none",
    paddingBottom: 15,
  },
  footer_absolute: {
    width: 60,
    height: 60,
    backgroundColor:colors.feuillet,
    borderRadius: 50,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#DC0200",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    fontSize: 16,
    color: "white",
  },
  header_name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#191919",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 42,
  },
  header_back_btn: {
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  background_block: {
    flex:1,
    height: "100%",
    backgroundColor: colors.white,
  },
  purchase_history: {
    flexDirection: "column",
    alignItems: "center",
    gap:30
  },
  image_all: {
    width:'100%',
    height: "100%",
  },
  history_text_one: {
    fontSize: 23,
    fontWeight: "700",
    color: "#191919",
    lineHeight: 26,
    textAlign: "center",
  },
  history_text_two: {
    fontSize: 16,
    fontWeight: "400",
    color: "#191919",
    textAlign: "center",
    lineHeight: 18,
  },
  input: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input_mask: {
    width: "90%",
    paddingLeft: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#191919",
    marginBottom: 5,
  },
  input_block_all: {
    flexDirection: "column",
    gap: 14,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  active_cell_box: {
    width: 15,
    height: 15,
    backgroundColor: colors.feuillet,
    borderRadius: 50,
  },
  phone_input_mask_block: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    backgroundColor: colors.phon,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    paddingHorizontal: 10,
  },
  promtion_title: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    color: "#191919",
  },
  btn_all: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content_modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modal_block: {
    width: "90%",
    height: 305,
    backgroundColor: "white",
    borderRadius: 14,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  modal_block_placing: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderRadius: 14,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  promtion_title_placing: {
    fontSize: 20,
    fontWeight: "600",
    color: "#191919",
  },
  promtion_text_placing: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B6B6B",
    textAlign: "center",
  },
  icon_check: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.feuillet,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_close: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  },
});
