import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'

class Loading extends React.Component {
  state = {}

  render() {
    const { isLoading } = this.props
    if (!isLoading) {
      return null
    }

    return (
      <View
        style={[
          {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            flex: 1,
            backgroundColor: 'rgba(98,107,123,0.6)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 100000,
          },
        ]}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    )
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}

Loading.defaultProps = {
  isLoading: false,
}

const mapStatetoProps = ({
  tempStore,
}) => ({
  isLoading: tempStore.isLoading,
})

export default connect(mapStatetoProps)(Loading)
