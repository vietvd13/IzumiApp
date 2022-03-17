export const styleSideView = {
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#FFF',
    marginBottom: 15,

    shadowColor: '#171717',
    shadowOffset: {
      width: -2, 
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: 'red',
    minWidth: 25,
    minHeight: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold'
  }
}