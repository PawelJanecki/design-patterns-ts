class IOSButton {}

class AndroidButton {}

// Without Factory
// const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();
// const button2 = os === 'ios' ? new IOSButton() : new AndroidButton();

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const button1 = factory.createButton('ios');
const button2 = factory.createButton('android');