import { metAPI } from "@proccess/api";
import { transferTree } from "@proccess/helper/transfer";
import { PayloadAction } from "@reduxjs/toolkit";
import { actions } from "@store/reducer";
import { AxiosResponse } from "axios";
import {
  cloneDeep,
  filter,
  includes,
  isArray,
  isEqual,
  isString,
  size,
} from "lodash";
import {
  all,
  call,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { v4 } from "uuid";
import { $Args } from "./@type";
import { LoadingPro } from "@libs";
import { ClusterServer } from "@proccess/envs/config";
import { EFncID } from "@@init/base";
import { openToast } from "@/assets/support";

function* requestList({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: payload?.namePath || "GetList",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
        baseURL: payload?.baseURL,
      }).GET({
        ...payload.data,
      }),
    );
    if (data) {
      const conditions = payload?.conditions;
      const _data: any = conditions?.[conditions?.Key]
        ? filter(data?.Data, {
            [conditions?.Key]: conditions?.[conditions?.Key],
          })
        : data.Data;
      yield payload.callBack?.({ data: { ...data, Data: _data } });

      if (data?.Data) {
        if (payload.transferTree?.name) {
          const list = transferTree({
            list: _data,
            ParentKey: payload.transferTree.ParentKey,
            ChildrenKey: payload.transferTree.ChildrenKey,
            RootID: payload.transferTree.RootID,
          });
          yield put(
            actions.joint.saveData({
              data: list,
              name: payload.transferTree.name,
            }),
          );
        }
      }

      yield put(
        actions.joint.saveData({
          data: _data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    console.info("error", error);
    yield payload.callBack?.({ error });

    yield put(
      actions.joint.saveData({
        data: [],
        name: payload.name,
      }),
    );
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestListWatcher() {
  yield takeEvery(actions.joint.requestList, requestList);
}

function* getListPermission({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: "GetListPermission",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );

    if (data) {
      yield payload.callBack?.({ data });

      if (payload.transferTree?.name) {
        const list = transferTree({
          list: data?.Data,
          ParentKey: payload.transferTree.ParentKey,
          ChildrenKey: payload.transferTree.ChildrenKey,
          RootID: payload.transferTree.RootID,
        });
        yield put(
          actions.joint.saveData({
            data: list,
            name: payload.transferTree.name,
          }),
        );
      }

      yield put(
        actions.joint.saveData({
          data: data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    console.info("error", error);
    yield payload.callBack?.({ error });
  } finally {
    yield delay(1000);
  }
}

function* requestGetListPermission() {
  yield takeLatest(actions.joint.getListPermission, getListPermission);
}

function* requestCodeList({ payload }: PayloadAction<$Args>) {
  yield LoadingPro.onRunning({ name: payload.name, status: true });

  try {
    const { joint } = yield select((state) => state);

    const isRecall =
      includes([undefined, null, ""], joint[payload.name]) ||
      size(joint[payload.name]) < 1 ||
      size(joint[payload.name]?.Data) < 1 ||
      !joint[payload.name] ||
      !payload?.checkExistData;

    if (isRecall) {
      const { data }: AxiosResponse = yield call(() =>
        metAPI({
          name: payload?.namePath || "GetCodeList",
          functionID: payload?.functionID,
          cluster: payload?.cluster,
          baseURL: payload?.baseURL,
        }).GET({
          ...payload.data,
        }),
      );

      yield payload.callBack?.({ data });
      yield put(
        actions.joint.saveData({
          data: data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestCodeListWatcher() {
  yield takeEvery(actions.joint.requestCodeList, requestCodeList);
}

function* requestLoad({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: payload?.namePath || "Load",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );

    yield payload.callBack?.({ data });

    if (data?.Data) {
      yield put(
        actions.joint.saveData({
          data: data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
    yield put(
      actions.joint.saveData({
        data: null,
        name: payload.name,
      }),
    );
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestLoadWatcher() {
  yield takeLatest(actions.joint.requestLoad, requestLoad);
}

function* requestLoadPatient({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: "GetAdmissionInfo",
        functionID: EFncID.NoiTruAll,
        cluster: ClusterServer.HIS,
      }).GET({
        ...payload.data,
      }),
    );

    if (data?.Data) {
      yield put(
        actions.joint.saveData({
          data: isArray(data?.Data) ? data?.Data : [data?.Data],
          name: payload.name,
        }),
      );
    } else {
      yield put(
        actions.joint.saveData({
          data: null,
          name: payload.name,
        }),
      );
    }
    yield payload.callBack?.({ data });
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
    yield put(
      actions.joint.saveData({
        data: null,
        name: payload.name,
      }),
    );
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestLoadPatientWatcher() {
  yield takeLatest(actions.joint.requestLoadPatient, requestLoadPatient);
}

function* requestListDetail({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: "GetListDetail",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );
    if (data) {
      yield payload.callBack?.({ data });
      yield put(
        actions.joint.saveData({
          data: data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
    yield put(
      actions.joint.saveData({
        data: null,
        name: payload.name,
      }),
    );
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestListDetailWatcher() {
  yield takeEvery(actions.joint.requestListDetail, requestListDetail);
}

function* requestLoadEMRTree({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });
    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: payload.namePath || "LoadEMRTree",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
        baseURL: payload?.baseURL,
      }).GET({
        ...payload.data,
      }),
    );

    // const data = { Data: _x };

    if (data) {
      let list: any = [];
      if (payload?.transferTree?.name) {
        list = transferTree({
          list: data?.Data,
          ParentKey: payload.transferTree.ParentKey,
          ChildrenKey: payload.transferTree.ChildrenKey,
          RootID: payload.transferTree.RootID,
        });
        yield put(
          actions.joint.saveData({
            data: list,
            name: payload?.transferTree?.name,
          }),
        );
      }

      yield payload.callBack?.({
        data: {
          ...data,
          Tree: list,
        },
      });

      yield put(
        actions.joint.saveData({
          data: data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield put(
      actions.joint.saveData({
        data: null,
        name: payload.name,
      }),
    );

    yield put(
      actions.joint.saveData({
        data: [],
        name: payload?.transferTree?.name,
      }),
    );
    yield payload.callBack?.({ error });

    console.info("error", error);
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestLoadEMRTreeWatcher() {
  yield takeLatest(actions.joint.requestLoadEMRTree, requestLoadEMRTree);
}

function* requestSignFileFormServer({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });
    const data = payload.data;
    if (data) {
      yield payload.callBack?.({ data });
      yield put(
        actions.joint.saveData({
          data: data.path,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestSignFileFormServerWatcher() {
  yield takeLatest(
    actions.joint.requestSignFileFormServer,
    requestSignFileFormServer,
  );
}

function* requestPatientRequest({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const data: AxiosResponse = yield call(() =>
      metAPI({
        name: "getPatientRequest",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );

    if (data?.data?.Data) {
      yield put(
        actions.joint.saveData({
          data: data?.data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestPatientRequestWatcher() {
  yield takeEvery(actions.joint.requestPatientRequest, requestPatientRequest);
}

function* requestDetails({ payload }: PayloadAction<$Args>) {
  yield LoadingPro.onRunning({ name: payload.name, status: true });
  try {
    const { data }: AxiosResponse<IResponse> = yield call(() =>
      metAPI({
        name: payload?.namePath,
        functionID: payload?.functionID,
        cluster: payload?.cluster,
        baseURL: payload?.baseURL,
      }).GET({
        ...payload.data,
      }),
    );
    yield put(
      actions.joint.saveData({
        data: isString(data?.Data)
          ? data?.Data
          : isArray(data?.Data)
            ? cloneDeep(data?.Data)
            : {
                ...data?.Data,
                uuid: v4(),
              },
        name: payload.name,
      }),
    );
    yield payload.callBack?.({ data });
  } catch (error) {
    yield put(
      actions.joint.saveData({
        data: undefined,
        name: payload.name,
      }),
    );
    yield payload.callBack?.({ error });
    console.info("error", error);
  }

  yield delay(500);
  yield LoadingPro.onRunning({ name: payload.name, status: false });
}

function* requestDetailsWatcher() {
  yield takeEvery(actions.joint.requestDetails, requestDetails);
}

function* GetSpecialExamTransfer({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const data: AxiosResponse = yield call(() =>
      metAPI({
        name: "M02F01300/GetSpecialExamTransfer",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );
    if (data) {
      yield payload.callBack?.({ data });
      yield put(
        actions.joint.saveData({
          data: data?.data?.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    console.info("error", error);
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* GetSpecialExamTransferWatcher() {
  yield takeLatest(
    actions.joint.GetSpecialExamTransfer,
    GetSpecialExamTransfer,
  );
}

function* requestSyncData({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const data: AxiosResponse = yield call(() =>
      metAPI({
        name: "SyncData",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).POST({
        ...payload.data,
      }),
    );
    if (isEqual(data?.status, 200)) {
      openToast({
        type: "success",
        message: "Đồng bộ thành công!",
      });
    } else {
      openToast({
        type: "error",
        message: "Có lỗi xảy ra!",
      });
    }
  } catch (error) {
    yield payload.callBack?.({ error });
    openToast({
      type: "error",
      message: "Có lỗi xảy ra!",
    });
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestSyncDataWatcher() {
  yield takeLatest(actions.joint.requestSyncData, requestSyncData);
}

function* requestData({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: "GetDataPartItem",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );

    if (data) {
      yield payload.callBack?.({ data });

      if (payload.transferTree?.name) {
        const list = transferTree({
          list: data.Data,
          ParentKey: payload.transferTree.ParentKey,
          ChildrenKey: payload.transferTree.ChildrenKey,
          RootID: payload.transferTree.RootID,
        });
        yield put(
          actions.joint.saveData({
            data: list,
            name: payload.transferTree.name,
          }),
        );
      }

      yield put(
        actions.joint.saveData({
          data: data.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    console.info("error", error);
    yield put(
      actions.joint.saveData({
        data: [],
        name: payload?.name,
      }),
    );
    yield payload.callBack?.({ error });
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestDataWatcher() {
  yield takeEvery(actions.joint.requestData, requestData);
}
function* requestListTemplate({ payload }: PayloadAction<$Args>) {
  try {
    yield LoadingPro.onRunning({ name: payload.name, status: true });

    const { data }: AxiosResponse = yield call(() =>
      metAPI({
        name: "GetList",
        functionID: payload?.functionID,
        cluster: payload?.cluster,
      }).GET({
        ...payload.data,
      }),
    );

    if (data) {
      yield payload.callBack?.({ data });

      if (payload.transferTree?.name) {
        const list = transferTree({
          list: data.Data,
          ParentKey: payload.transferTree.ParentKey,
          ChildrenKey: payload.transferTree.ChildrenKey,
          RootID: payload.transferTree.RootID,
        });
        yield put(
          actions.joint.saveData({
            data: list,
            name: payload.transferTree.name,
          }),
        );
      }

      yield put(
        actions.joint.saveData({
          data: data.Data,
          name: payload.name,
        }),
      );
    }
  } catch (error) {
    console.info("error", error);
    yield payload.callBack?.({ error });
  } finally {
    yield delay(1000);
    yield LoadingPro.onRunning({ name: payload.name, status: false });
  }
}

function* requestListTemplateWatcher() {
  yield takeEvery(actions.joint.requestListTemplate, requestListTemplate);
}

const joint = function* root() {
  yield all([
    fork(requestListTemplateWatcher),
    fork(requestCodeListWatcher),
    fork(requestLoadWatcher),
    fork(requestListWatcher),
    fork(requestListDetailWatcher),
    fork(requestLoadPatientWatcher),
    fork(requestLoadEMRTreeWatcher),
    fork(requestSignFileFormServerWatcher),
    fork(requestGetListPermission),
    fork(requestPatientRequestWatcher),
    fork(requestDetailsWatcher),
    fork(GetSpecialExamTransferWatcher),
    fork(requestSyncDataWatcher),
    fork(requestDataWatcher),
    fork(requestListTemplateWatcher),
  ]);
};
export { joint };
