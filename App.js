import { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      btnGo: 'Go!',
      tempo: null
    }
    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.parar = this.parar.bind(this)
  }


  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.setState({ btnGo: 'Go!' })

    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })}, 100)
      this.setState({ btnGo: 'Stop' })
    }
  }

  parar() {
    if(this.timer != null){
      clearInterval(this.timer)
    }
    this.setState({numero: 0, btnGo: 'Go!', tempo: this.state.numero})
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/cronometro.png')} style={styles.cronometro} />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto} onPress={this.iniciar}>{this.state.btnGo}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto} onPress={this.parar}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaTempo}>
          <Text style={styles.tempoParado}>{this.state.tempo > 0 ? 'Último tempo: ' + this.state.tempo.toFixed(2) + 's' : ''}</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {

  },
  timer: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -160
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaTempo:{
    marginTop: 40,
  },
  tempoParado:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
})

export default App;