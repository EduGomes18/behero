import styled from "styled-components/native";
import Constants from "expo-constants";
import { Principal, Secondary, Gray, Success, Black } from "../../Config/Theme";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 20};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.Image``;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${Gray};
`;
export const HeaderBold = styled.Text`
  font-weight: bold;
  color: ${props => props.color};
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  font-weight: bold;
  margin-top: 48px;
  color: ${Principal};
`;
export const Description = styled.Text`
  font-size: 14px;
  line-height: 24px;
  color: ${Gray};
`;

export const Incident = styled.View`
  margin-top: 32px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${Principal};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: ${Gray};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: ${Secondary};
  font-size: 15px;
  font-weight: bold;
`;

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
font-weight: bold;
font-size:20px;
color: ${Black}
line-height:30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${Gray};
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background: ${Secondary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
