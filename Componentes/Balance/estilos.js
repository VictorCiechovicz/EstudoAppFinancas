import {StyleSheet} from 'react-native'

  const estilos = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
  
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 10,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99
    },
    item: {},
    itemTitle: {
      fontSize: 20,
      color: '#dadada'
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    currencySymbol: {
      color: '#dadada',
      marginRight: 5
    },
    balance: {
      fontSize: 22,
      color: '#2ecc71'
    },
    gastos: {
      fontSize: 22,
      color: '#e74c3c'
    }
  })

export default estilos