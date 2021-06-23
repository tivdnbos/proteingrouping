'use strict';
import {
    AssertionError,
    AttributeError,
    BaseException,
    DeprecationWarning,
    Exception,
    IndexError,
    IterableError,
    KeyError,
    NotImplementedError,
    RuntimeWarning,
    StopIteration,
    UserWarning,
    ValueError,
    Warning,
    __JsIterator__,
    __PyIterator__,
    __Terminal__,
    __add__,
    __and__,
    __call__,
    __class__,
    __envir__,
    __eq__,
    __floordiv__,
    __ge__,
    __get__,
    __getcm__,
    __getitem__,
    __getslice__,
    __getsm__,
    __gt__,
    __i__,
    __iadd__,
    __iand__,
    __idiv__,
    __ijsmod__,
    __ilshift__,
    __imatmul__,
    __imod__,
    __imul__,
    __in__,
    __init__,
    __ior__,
    __ipow__,
    __irshift__,
    __isub__,
    __ixor__,
    __jsUsePyNext__,
    __jsmod__,
    __k__,
    __kwargtrans__,
    __le__,
    __lshift__,
    __lt__,
    __matmul__,
    __mergefields__,
    __mergekwargtrans__,
    __mod__,
    __mul__,
    __ne__,
    __neg__,
    __nest__,
    __or__,
    __pow__,
    __pragma__,
    __pyUseJsNext__,
    __rshift__,
    __setitem__,
    __setproperty__,
    __setslice__,
    __sort__,
    __specialattrib__,
    __sub__,
    __super__,
    __t__,
    __terminal__,
    __truediv__,
    __withblock__,
    __xor__,
    abs,
    all,
    any,
    assert,
    bool,
    bytearray,
    bytes,
    callable,
    chr,
    copy,
    deepcopy,
    delattr,
    dict,
    dir,
    divmod,
    enumerate,
    filter,
    float,
    getattr,
    hasattr,
    input,
    int,
    isinstance,
    issubclass,
    len,
    list,
    map,
    max,
    min,
    object,
    ord,
    pow,
    print,
    property,
    py_TypeError,
    py_iter,
    py_metatype,
    py_next,
    py_reversed,
    py_typeof,
    range,
    repr,
    round,
    set,
    setattr,
    sorted,
    str,
    sum,
    tuple,
    zip
} from "./org.transcrypt.__runtime__.js";

var __name__ = "ProteinSubGrouping";
export var create_protein_subgroups = function (occam_flag, protein_groups, protein_peptide_dict) {
    var protein_subgroups = dict();
    for (var protein_group_id of protein_groups.py_keys()) {
        var protein_subgroup_id_first_half = str(protein_group_id) +
            "_";
        var protein_list = protein_groups[protein_group_id].slice();
        var subgroup_count = 0;
        while (len(protein_list) > 0) {
            var current_protein = protein_list.py_pop();
            var subgroup_protein_list = new set([current_protein]);
            subgroup_count++;
            var subgroup_id = protein_subgroup_id_first_half + str(subgroup_count);
            protein_subgroups[subgroup_id] = subgroup_protein_list;
            var peptide_set_1_group = protein_peptide_dict[current_protein];
            var list_of_proteins_to_remove = set();
            for (var compare_protein of protein_list) {
                var peptide_set_2_compare =
                    protein_peptide_dict[compare_protein];
                if (peptide_set_1_group.issubset(peptide_set_2_compare)) {
                    var add = true;
                    if (!occam_flag) for (var other_protein of protein_list) if (other_protein != compare_protein) if (!__in__(other_protein, list_of_proteins_to_remove)) {
                        var peptide_set_3_other = protein_peptide_dict[other_protein];
                        if (peptide_set_1_group.issubset(peptide_set_3_other)) if (!(peptide_set_2_compare < peptide_set_3_other) && !(peptide_set_3_other < peptide_set_2_compare)) {
                            var add = false;
                            break
                        }
                    }
                    if (add) {
                        var peptide_set_1_group =
                            peptide_set_2_compare;
                        subgroup_protein_list.add(compare_protein);
                        list_of_proteins_to_remove.add(compare_protein)
                    }
                } else if (peptide_set_2_compare.issubset(peptide_set_1_group)) {
                    var add = true;
                    if (!occam_flag) for (var other_protein of protein_list) if (other_protein != compare_protein) {
                        var peptide_set_3_other = protein_peptide_dict[other_protein];
                        if (peptide_set_2_compare < peptide_set_3_other) if (!(peptide_set_1_group < peptide_set_3_other) && !peptide_set_3_other.issubset(peptide_set_1_group)) {
                            var add = false;
                            break
                        }
                    }
                    if (add) {
                        subgroup_protein_list.add(compare_protein);
                        list_of_proteins_to_remove.add(compare_protein)
                    }
                }
            }
            for (var remove_protein of list_of_proteins_to_remove) protein_list.remove(remove_protein)
        }
    }
    return protein_subgroups
};

//# sourceMappingURL=ProteinSubGrouping.map