
interface ConstantInterface {
  readonly SYSTEM: SystemConfigInterface;
  readonly DB: DatabaseConfigInterface;
}
// export const CONFIG: ConstantInterface = {
//   SYSTEM: {
//     PORT: 1200,
//     HOST: 'localhost',
//   },
//   DB: {
//     PORT: 1200,
//     USER: 'root',
//     DATABASE: 'online_course',
//     PASSWORD: 'lotterygroup',
//   },
// };

export const CONFIG: ConstantInterface = {
  SYSTEM: {
    PORT: 1200,
    HOST: 'localhost',
  },
  DB: {
    PORT: 5432,
    HOST: 'localhost',
    USER: 'vantopfedos',
    DATABASE: 'test',
    PASSWORD: '123456',
  },
};
