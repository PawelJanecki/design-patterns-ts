class Settings {
  static instance: Settings;
  public readonly mode = 'dark';
  public readonly time = new Date().toISOString();

  // prevent new with private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }
}

// cannot create new instance because constructor is private
// const settings = new Settings()
const settings = Settings.getInstance();