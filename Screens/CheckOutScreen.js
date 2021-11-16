import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {CreditCardInput, LiteCreditCardInput} from "react-native-vertical-input-credit-card";
import {BorderlessButton} from "react-native-gesture-handler";

const CheckOutScreen = props => {
    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep>
                    <View style={styles.paymentContainer}>
                        <View style={styles.paymentFormContainer}>
                            <CreditCardInput cardScale={0.7}/>
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    paymentContainer: {
        flex: 1,
    },
    paymentFormContainer: {}
})

export default CheckOutScreen