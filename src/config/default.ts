
interface ConstantInterface {
  readonly SYSTEM: SystemConfigInterface;
  readonly DB: DatabaseConfigInterface;
}
export const CONFIG: ConstantInterface = {
  SYSTEM: {
    PORT: 1200,
    HOST: 'localhost',
  },
  DB: {
    HOST: 1200,
    USER: 'root',
    DATABASE: 'online_course',
    PASSWORD: 'lotterygroup',
  },
};
