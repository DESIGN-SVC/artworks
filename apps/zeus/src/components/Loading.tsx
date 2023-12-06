
import loading from '~/assets/loading-zeus.gif'
export const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50 ">
    <img alt="Carregando..." className="flex-none" src={loading} />
  </div>
);
